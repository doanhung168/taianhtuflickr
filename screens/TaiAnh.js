import React, { useState } from "react"
import { View, Image, Alert } from 'react-native'
import { FloatingAction } from "react-native-floating-action"
import * as FileSystem from 'expo-file-system';

const TaiAnh = ({ route }) => {

	const item = route.params.item
	const actions = []
	const data = { url: '' }

	if (item.url_c != 'undefined') {
		actions.push(
			{
				text: item.width_c + 'x' + item.height_c,
				icon: require('./../assets/download.png'),
				name: 'url_c',
				position: 2
			}
		)
		data.url = item.url_c
	}

	if (item.url_z != 'undefined') {
		actions.push(
			{
				text: item.width_z + 'x' + item.height_z,
				icon: require('./../assets/download.png'),
				name: 'url_z',
				position: 1
			}
		)
		data.url = item.url_z
	}
	if (item.h != 'undefined') {
		actions.push(
			{
				text: item.width_h + 'x' + item.height_h,
				icon: require('./../assets/download.png'),
				name: 'url_h',
				position: 3
			}
		)
		data.url = item.url_h
	}
	if (item.url_k != 'undefined') {
		actions.push(
			{
				text: item.width_k + 'x' + item.height_k,
				icon: require('./../assets/download.png'),
				name: 'url_k',
				position: 4
			}
		)
		data.url_k = item.url_k
	}


	return (
		<View style={{ flex: 1 }}>
			<Image source={{ uri: data.url }} style={{ width: '100%', height: '100%', marginVertical: 20 }} />
			<FloatingAction actions={actions} onPressItem={name => {
				var url = ''
				if (name == 'url_c') {
					url = item.url_c
				} else if (name == 'url_z') {
					url = item.url_z
				} else if (name == 'url_h') {
					url = item.url_h
				} else if (name == 'url_k') {
					url = item.url_k
				}
				FileSystem.downloadAsync(url, FileSystem.documentDirectory + '123.jpg')
				.then(({uri}) => Alert.alert('Download Success! Uri: ' + uri))
				.catch(({error}) => console.log(error))
			}} />
		</View>
	)
}




export default TaiAnh