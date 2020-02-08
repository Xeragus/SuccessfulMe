import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Text, Platform } from 'react-native'
import DashboardScreen from '../screens/core/DashboardScreen'
import DailyGoalsScreen from '../screens/core/DailyGoalsScreen'
import WeeklyGoalsScreen from '../screens/core/WeeklyGoalsScreen'
import MonthlyGoalsScreen from '../screens/core/MonthlyGoalsScreen'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const tabScreenConfig = {
  Dashboard: {
      screen: DashboardScreen
  },
  Daily: {
      screen: DailyGoalsScreen
  },
  Weekly: {
    screen: WeeklyGoalsScreen
  },
  //   Monthly: {
//     screen: MonthlyGoalsScreen
//   }
}

const AppNavigator = Platform.OS === 'android' ?
  createMaterialBottomTabNavigator(
    tabScreenConfig, {
      activeTintColor: Colors.accentColor
    },
  ) : createBottomTabNavigator(tabScreenConfig)

export default createAppContainer(AppNavigator)