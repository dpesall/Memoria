import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { layout, spacing } from '../../styles/theme/spacing';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  gameOver_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary_background,
    paddingTop: 40,
  },

  gameOver_heroSection: {
    alignItems: 'center',
    marginBottom: 40,
  },

  gameOver_subtitle: {
    fontSize: 22,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 8,
    letterSpacing: 1,
  },

  gameOver_heroScore: {
    fontSize: 80,
    fontWeight: 'bold',
    color: colors.neutral_white,
    letterSpacing: -2,
  },

  gameOver_heroLabel: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.5)',
    marginTop: -4,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  gameOver_statsCard: {
    backgroundColor: colors.primary_dark,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
    width: width * 0.85,
  },

  gameOver_statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },

  gameOver_divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  gameOver_statLabel: {
    fontSize: 17,
    color: 'rgba(255,255,255,0.7)',
  },

  gameOver_statValue: {
    fontSize: 17,
    color: colors.neutral_white,
    fontWeight: '600',
  },

  gameOver_buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },

  gameOver_button: {
    backgroundColor: colors.primary_dark,
    width: width * 0.5,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gameOver_buttonText: {
    color: colors.neutral_white,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default styles;
