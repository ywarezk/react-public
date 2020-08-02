import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/main'
import MapView from 'react-native-maps';

export default function Home() {
	return (
		<View>
			<MapView
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		</View>
	)
}