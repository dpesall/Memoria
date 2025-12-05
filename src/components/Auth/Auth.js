import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../styles/theme/colors';
import styles from './Auth.styles';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { signIn, signUp } = useAuth();

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) setError(error.message);
      } else {
        if (!username.trim()) {
          setError('Username is required');
          setLoading(false);
          return;
        }
        if (username.trim().length > 14) {
          setError('Username must be 14 characters or less');
          setLoading(false);
          return;
        }
        if (password.length > 64) {
          setError('Password must be 64 characters or less');
          setLoading(false);
          return;
        }
        const { error } = await signUp(email, password, username);
        if (error) setError(error.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.auth_container}>
      <Text style={styles.auth_title}>MEMORIA</Text>
      <Text style={styles.auth_subtitle}>{isLogin ? 'Welcome Back' : 'Create Account'}</Text>

      <View style={styles.auth_form}>
        {!isLogin && (
          <TextInput
            style={styles.auth_input}
            placeholder="Username"
            placeholderTextColor={colors.text_secondary}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            maxLength={14}
          />
        )}

        <TextInput
          style={styles.auth_input}
          placeholder="Email"
          placeholderTextColor={colors.text_secondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.auth_input}
          placeholder="Password"
          placeholderTextColor={colors.text_secondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          maxLength={64}
        />

        {error && <Text style={styles.auth_error}>{error}</Text>}

        <TouchableOpacity
          style={styles.auth_button}
          onPress={handleSubmit}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color={colors.text_primary} />
          ) : (
            <Text style={styles.auth_buttonText}>
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.auth_switchButton}
          onPress={() => {
            setIsLogin(!isLogin);
            setError(null);
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.auth_switchText}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Auth;
