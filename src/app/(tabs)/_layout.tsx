import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof FontAwesome.glyphMap;

          switch (route.name) {
            case 'home':
              iconName = 'home';
              size = 35
              break;
            case 'profile':
              iconName = 'user';
              size = 35
              break;
            default:
              iconName = 'circle';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F88158',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1d2024',
          borderTopWidth: 0
        }
      })}
    >
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
}
