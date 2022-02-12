import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const MealsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    }}>
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "Meal Categories",
      }}
    />
    <Stack.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={({ route }) => ({ title: route.params.category.title })}
    />
    <Stack.Screen
      name="MealDetails"
      component={MealDetailsScreen}
      options={({ route }) => ({
        title: route.params.meal.title,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="star" />
          </HeaderButtons>
        ),
      })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
      }}>
      <Tab.Screen
        name="Categories"
        component={MealsNavigator}
        options={{ tabBarIcon: (tabInfo) => <Feather name="coffee" color={tabInfo.color} /> }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ tabBarIcon: (tabInfo) => <Feather name="star" color={tabInfo.color} /> }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
