import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Screen() {

    return(
        <View style={styles.container}> 
            <View style={styles.profile}>
                <Image style={styles.img} source={require('../../assets/funny-cat-22.jpg')} />
                <Text style={styles.text}>Davi Lavior</Text>
            </View>
            <View>
                <View style={styles.option}>
                    <FontAwesome name="truck" size={35} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Meus Pedidos</Text>
                        <Text style={styles.description}>Consulte seus pedidos</Text>
                    </View>   
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.option}>
                    <FontAwesome name="shopping-cart" size={35} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Meu carrinho</Text>
                        <Text style={styles.description}>Complete as suas compras</Text>
                    </View>   
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.option}>
                    <FontAwesome name="paper-plane" size={35} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Endereços</Text>
                        <Text style={styles.description}>Adicione ou altere seus endereços</Text>
                    </View>   
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.option}>
                    <FontAwesome name="bars" size={35} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Dados da Conta</Text>
                        <Text style={styles.description}>Edite seus dados</Text>
                    </View>   
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.option}>
                    <FontAwesome name="gear" size={35} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Configurações</Text>
                        <Text style={styles.description}>Configure suas opções</Text>
                    </View>   
                </View>
                <View style={styles.horizontalLine} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        gap: 20,
        marginTop: 40
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    img: {
        width: 105,
        height: 105,
        borderWidth: 2,
        borderColor: '#0000FF',
        borderRadius: 100
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 13,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
    },
    textContainer: {
        flexDirection: 'column',
        gap: 1,
        marginLeft: 10
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#000',
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
    }
  });