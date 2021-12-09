import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  async setSumByDay(day, sum) {
    await AsyncStorage.setItem(day, sum);
  },
  async getDataByDay(day) {
    const res = await AsyncStorage.getItem(day);
    return res;
  },
};
