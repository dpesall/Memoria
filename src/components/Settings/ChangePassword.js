import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import { supabase } from '../../config/supabase';
import { colors } from '../../styles/theme/colors';
import styles from './ChangePassword.styles';

const ChangePassword = ({ setPageView }) => {
  const { user } = useAuth();
  const { playClickSound } = useSound();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleUpdatePassword = async () => {
    Keyboard.dismiss();
    setError(null);
    setSuccess(null);

    if (!currentPassword) {
      setError('Please enter your current password');
      return;
    }

    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });

    if (signInError) {
      setError('Current password is incorrect');
      setLoading(false);
      return;
    }

    if (!newPassword || !confirmPassword) {
      setError('Please fill in all password fields');
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (newPassword.length > 64) {
      setError('New password must be 64 characters or less');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) {
        setError(error.message);
      } else {
        setSuccess('Password updated successfully');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.changePassword_container}>
      <View style={styles.changePassword_header}>
        <Text style={styles.changePassword_title}>Change Password</Text>
      </View>

      <View style={styles.changePassword_content}>
        <TextInput
          style={styles.changePassword_input}
          placeholder="Current Password"
          placeholderTextColor={colors.text_secondary}
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry
          maxLength={64}
        />

        <TextInput
          style={styles.changePassword_input}
          placeholder="New Password"
          placeholderTextColor={colors.text_secondary}
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
          maxLength={64}
        />

        <TextInput
          style={styles.changePassword_input}
          placeholder="Confirm New Password"
          placeholderTextColor={colors.text_secondary}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          maxLength={64}
        />

        <TouchableOpacity
          style={styles.changePassword_updateButton}
          onPress={() => { playClickSound(); handleUpdatePassword(); }}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color={colors.text_primary} />
          ) : (
            <Text style={styles.changePassword_updateButtonText}>Update Password</Text>
          )}
        </TouchableOpacity>

        {error && (
          <Text style={[styles.changePassword_message, styles.changePassword_errorMessage]}>
            {error}
          </Text>
        )}

        {success && (
          <Text style={[styles.changePassword_message, styles.changePassword_successMessage]}>
            {success}
          </Text>
        )}
      </View>

      <View style={styles.changePassword_footer}>
        <TouchableOpacity
          style={styles.changePassword_backButton}
          onPress={() => { playClickSound(); setPageView('main'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.changePassword_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
