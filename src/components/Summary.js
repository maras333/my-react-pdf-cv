import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    summary: {
        fontFamily: 'Lato',
        fontSize: 10,
    }
});

const Summary = () => (
    <View style={styles.container}>
        <Title>Summary</Title>
        <Text style={styles.summary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan enim eu ipsum cursus, gravida tincidunt purus tempor. Vivamus vitae convallis nisi. Integer vel blandit turpis. In consequat arcu in eros ullamcorper, eget feugiat nisi luctus. Fusce rhoncus magna velit, in finibus erat ornare in. Donec sit amet condimentum ligula, eget suscipit massa. Fusce leo ex, fermentum vitae rutrum at, gravida at dolor. Phasellus faucibus orci at nulla accumsan imperdiet. Fusce nec ornare nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ante urna, maximus vel nulla ut, interdum dignissim purus. Etiam pretium urna quis molestie vehicula.</Text>
    </View>
);

export default Summary;