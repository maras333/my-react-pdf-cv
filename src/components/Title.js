import React from 'react';

import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
    color: '#6c6ce0',
    textDecoration: 'underline'
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;