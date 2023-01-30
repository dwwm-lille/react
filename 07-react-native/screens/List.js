import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export default function List({ navigation }) {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const goTo = (item) => {
        navigation.navigate('Item', { number: item });
    }

    return (
        <ScrollView>
            {items.map((item, index) =>
                <View style={styles.item} key={index}>
                    <Text style={{ fontSize: 32 }}>
                        <Button onPress={() => goTo(item)}>
                            {item}
                        </Button>
                    </Text>
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'darkgrey',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
