import { StatusBar } from "expo-status-bar";
import React, {useEffect} from "react"
import { ImageBackground, View, Text, StyleSheet } from 'react-native'

const ManHinhChao = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('XemAnh')
		}, 1500);
	}, [])
	return (
		<View style={Styles.container}>
			<StatusBar style="light"/>
			<ImageBackground source={require('./../assets/hinhnen1.jpg')} resizeMode='cover' style= {Styles.image}>
				<View style={Styles.viewText}>
					<Text style={Styles.text}>AsiaHD+Clone</Text>
					<Text style={Styles.text1}>Over 10000000 photos for sharing free</Text>
					<View style={Styles.load}></View>
				</View>
			</ImageBackground>
		</View>
	)
}


const Styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		flex: 1,
		justifyContent: "center"
	},
	viewText: {
		backgroundColor: "#1f1f1f9e",
		padding: 20
	},
	text: {
		color: "white",
		fontSize: 36,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 8
	},
	text1: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 16
	},
	load: {
		width: 200,
		height: 5,
		backgroundColor: "#96959594",
		alignSelf: 'center'
	}
})

export default ManHinhChao