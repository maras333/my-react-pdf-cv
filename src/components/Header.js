import React from 'react';

import { Link, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from '../loooogo.jpg'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderBottomColor: '#6c6ce0',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  detailColumn: {
    flexDirection: 'column',
    textTransform: 'uppercase',
    justifyContent: 'flex-end'
  },
  linkColumn: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  image: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: '#FFF',
    textDecoration: 'none',
    justifySelf: 'flex-end',
  },
});

const Header = () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Marek Czyż</Text>
      <Text style={styles.subtitle}>Software developer</Text>
    </View>
    <View style={styles.linkColumn}>
      <Text style={styles.subtitle}>Warsaw, Poland</Text>
      <Text style={styles.subtitle}>+48 663 145 368</Text>
      <Link style={styles.link}>maras.czyz@gmail.com</Link>
      <Link style={styles.link}>www.marekczyz.xyz</Link>
    </View>
  </View>
);

export default Header;