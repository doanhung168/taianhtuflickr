import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { View, Text, FlatList, TouchableHighlight, Image, ActivityIndicator } from 'react-native'

const Item = ({ item }) => (
	<View style={{ position: 'relative', margin: '5' }}>
		<TouchableHighlight>
			<Image source={{ uri: item.url_c }} resizeMode='contain' />
		</TouchableHighlight>
		<View style={{ position: 'absolute', bottom: 15, left: 15, flexDirection: 'row' }}>
			<Image source={require('./../assets/eye.png')} resizeMode='contain' width={20} height={20} style={{ marginRight: 8 }} />
			<Text>{item.views} views</Text>
		</View>
	</View>
);

const XemAnh = ({ navigation }) => {
	const [data, setData] = useState([{ id: '123', title: '123' }])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		fetch('https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=6615fa59746ced862b9f419b858e7e0d&user_id=72489705@N00&extras=views%2C+url_z%2C+url_c%2C+url_h%2C+url_k&per_page=100&page=1&format=json&nojsoncallback=1')
			.then(response => response.json())
			.then(json => {
				console.log(json.photos.photo)
				setLoading(false)
				setData(json.photos.photo);
			})
	}, [])

	return (
		<View style={{ backgroundColor: '#525548', flex: 1, justifyContent: 'center' }}>
			{
				loading ? <ActivityIndicator color={'white'} size='large' /> :
					<>
						<FlatList
							data={data}
							numColumns={2}
							renderItem={
								({ item }) => {
									return (
										<View style={{
											width: "50%", position: 'relative', padding: 8,
											borderRadius: 20
										}} >
											<TouchableHighlight onPress={() => { navigation.navigate('TaiAnh', { item: item }) }}>
												<Image source={{ uri: item.url_c }} style={{ width: '100%', height: 200, borderRadius: 12, overflow: 'hidden' }} />
											</TouchableHighlight>
											<View style={{ position: 'absolute', bottom: 15, left: 15, flexDirection: 'row' }}>
												<Image source={require('./../assets/eyewhite.png')} />
												<Text style={{ color: '#fff', marginLeft: 5, fontSize: 16 }}>{item.views} views</Text>
											</View>
										</View>
									)
								}
							}
						/>
					</>
			}
		</View>
	)
}




export default XemAnh