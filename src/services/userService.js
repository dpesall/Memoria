import { supabase } from '../config/supabase';

export async function searchUsers(query, limit = 20) {
  try {
    if (!query || query.trim().length < 2) {
      return { data: [], error: null };
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, created_at, current_streak, max_streak, total_daily_games')
      .ilike('username', `%${query.trim()}%`)
      .order('username')
      .limit(limit);

    if (error) throw error;
    return { data: data || [], error: null };
  } catch (error) {
    console.error('Error searching users:', error);
    return { data: [], error };
  }
}

export async function getUserProfile(userId) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, created_at, current_streak, max_streak, total_daily_games')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return { data: null, error };
  }
}

// ============ FRIEND FUNCTIONS ============

export async function sendFriendRequest(requesterId, addresseeId) {
  try {
    const { data, error } = await supabase
      .from('friendships')
      .insert({
        requester_id: requesterId,
        addressee_id: addresseeId,
        status: 'pending',
      })
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error sending friend request:', error);
    return { data: null, error };
  }
}

export async function acceptFriendRequest(friendshipId) {
  try {
    const { data, error } = await supabase
      .from('friendships')
      .update({ status: 'accepted', updated_at: new Date().toISOString() })
      .eq('id', friendshipId)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error accepting friend request:', error);
    return { data: null, error };
  }
}

export async function declineFriendRequest(friendshipId) {
  try {
    const { error } = await supabase
      .from('friendships')
      .delete()
      .eq('id', friendshipId);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Error declining friend request:', error);
    return { error };
  }
}

export async function cancelFriendRequest(friendshipId) {
  try {
    const { error } = await supabase
      .from('friendships')
      .delete()
      .eq('id', friendshipId);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Error canceling friend request:', error);
    return { error };
  }
}

export async function removeFriend(friendshipId) {
  try {
    const { error } = await supabase
      .from('friendships')
      .delete()
      .eq('id', friendshipId);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Error removing friend:', error);
    return { error };
  }
}

export async function getFriendsList(userId) {
  try {
    const { data, error } = await supabase
      .from('friendships')
      .select(`
        id,
        requester_id,
        addressee_id,
        created_at,
        requester:profiles!friendships_requester_id_fkey(id, username, current_streak, total_daily_games),
        addressee:profiles!friendships_addressee_id_fkey(id, username, current_streak, total_daily_games)
      `)
      .eq('status', 'accepted')
      .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`);

    if (error) throw error;

    const friends = (data || []).map((friendship) => {
      const friend =
        friendship.requester_id === userId
          ? friendship.addressee
          : friendship.requester;
      return {
        friendshipId: friendship.id,
        ...friend,
      };
    });

    friends.sort((a, b) => a.username.localeCompare(b.username));

    return { data: friends, error: null };
  } catch (error) {
    console.error('Error fetching friends list:', error);
    return { data: [], error };
  }
}

export async function getIncomingRequests(userId) {
  try {
    const { data, error } = await supabase
      .from('friendships')
      .select(`
        id,
        created_at,
        requester:profiles!friendships_requester_id_fkey(id, username, current_streak, total_daily_games)
      `)
      .eq('addressee_id', userId)
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const requests = (data || []).map((req) => ({
      friendshipId: req.id,
      createdAt: req.created_at,
      ...req.requester,
    }));

    return { data: requests, error: null };
  } catch (error) {
    console.error('Error fetching incoming requests:', error);
    return { data: [], error };
  }
}

export async function getOutgoingRequests(userId) {
  try {
    const { data, error } = await supabase
      .from('friendships')
      .select(`
        id,
        created_at,
        addressee:profiles!friendships_addressee_id_fkey(id, username, current_streak, total_daily_games)
      `)
      .eq('requester_id', userId)
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const requests = (data || []).map((req) => ({
      friendshipId: req.id,
      createdAt: req.created_at,
      ...req.addressee,
    }));

    return { data: requests, error: null };
  } catch (error) {
    console.error('Error fetching outgoing requests:', error);
    return { data: [], error };
  }
}

export async function getFriendCounts(userId) {
  try {
    const [friendsResult, incomingResult, outgoingResult] = await Promise.all([
      supabase
        .from('friendships')
        .select('id', { count: 'exact', head: true })
        .eq('status', 'accepted')
        .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`),
      supabase
        .from('friendships')
        .select('id', { count: 'exact', head: true })
        .eq('addressee_id', userId)
        .eq('status', 'pending'),
      supabase
        .from('friendships')
        .select('id', { count: 'exact', head: true })
        .eq('requester_id', userId)
        .eq('status', 'pending'),
    ]);

    return {
      data: {
        friendsCount: friendsResult.count || 0,
        incomingCount: incomingResult.count || 0,
        outgoingCount: outgoingResult.count || 0,
      },
      error: null,
    };
  } catch (error) {
    console.error('Error fetching friend counts:', error);
    return {
      data: { friendsCount: 0, incomingCount: 0, outgoingCount: 0 },
      error,
    };
  }
}

export async function getFriendshipStatus(userId, otherUserId) {
  try {
    const { data, error } = await supabase
      .from('friendships')
      .select('id, requester_id, addressee_id, status')
      .or(
        `and(requester_id.eq.${userId},addressee_id.eq.${otherUserId}),and(requester_id.eq.${otherUserId},addressee_id.eq.${userId})`
      )
      .maybeSingle();

    if (error) throw error;

    if (!data) {
      return { status: 'none', friendshipId: null, error: null };
    }

    if (data.status === 'accepted') {
      return { status: 'friends', friendshipId: data.id, error: null };
    }

    if (data.status === 'pending') {
      if (data.requester_id === userId) {
        return { status: 'pending_sent', friendshipId: data.id, error: null };
      } else {
        return { status: 'pending_received', friendshipId: data.id, error: null };
      }
    }

    return { status: 'none', friendshipId: null, error: null };
  } catch (error) {
    console.error('Error checking friendship status:', error);
    return { status: 'none', friendshipId: null, error };
  }
}
