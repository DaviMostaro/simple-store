import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: '#0000FF'}}> 
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Início',
                    tabBarIcon: ({color}) => <FontAwesome
                        size={28}
                        name="home"
                        color={color}
                    />
                }}
            />
            <Tabs.Screen 
                name="categories"
                options={{
                    headerShown: false,
                    title: 'Categorias',
                    tabBarIcon: ({color}) => <FontAwesome
                        size={28}
                        name="archive"
                        color={color}
                    />
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({color}) => <FontAwesome
                        size={28}
                        name="user"
                        color={color}
                    />
                }}
            />
            
        </Tabs>
    );
}

/*

<Tabs.Screen 
                name="categories"
                options={{
                    title: 'Categorias',
                    tabBarIcon: ({color}) => <FontAwesome
                        size={28}
                        name="archive"
                        color={color}
                    />
                }}
            />
            

*/