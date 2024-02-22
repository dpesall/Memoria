import { Stack } from 'expo-router';

import MenuIcon from './modules/menuIcon';
import { images } from "../constants/images";

const Layout = () => {
    return (
        <Stack initialRouteName="home">
            <Stack.Screen
                name="home" 
                options={{
                    headerTitle: 'Memoria',
                    headerBackVisible:false,
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#241106'
                    }
                }}
            />
            <Stack.Screen
                name="components/play" 
                options={{
                    headerLeft: () => <MenuIcon />,
                    headerTitle: 'Memoria',
                    headerTitleAlign: 'center',
                    headerBackVisible:false,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#241106'
                    },
                }}
            />
            <Stack.Screen
                name="components/standard"
                options={{
                    headerLeft: () => <MenuIcon />,
                    headerTitle: 'Memoria',
                    headerTitleAlign: 'center',
                    headerBackVisible:false,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#241106'
                    },
                }}
            />
            <Stack.Screen
                name="components/sandbox"
                options={{
                    headerLeft: () => <MenuIcon />,
                    headerTitle: 'Memoria',
                    headerTitleAlign: 'center',
                    headerBackVisible:false,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#241106'
                    },
                }}
            />
        </Stack>
    )
}

export default Layout;