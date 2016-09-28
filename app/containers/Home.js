import React, {Component} from 'react';
import {
    ScrollView,
    View,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false,
            ingredientsInput: '',
        }
    }

    searchPressed() {
        this.setState({searching: true});
        this.props.fetchRecipes(this.state.ingredientsInput);
        this.setState({searching: false});
    }

    recipes() {
        return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key]);
    }

    render() {
        return <View style={styles.scene}>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.searchInput}
                    returnKeyType="search"
                    placeholder="Search for things"
                    onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
                    value={this.state.ingredientsInput}
                />
                <TouchableHighlight
                    onPress={() => this.searchPressed()}
                    style={styles.searchButton}>
                    <Text>Fetch Recipes</Text>
                </TouchableHighlight>
            </View>
            <ScrollView style={styles.scrollSection}>
                {!this.state.searching && this.recipes().map((recipe) => {
                    return <View key={recipe.id}>
                        <Image source={{uri:recipe.image}} style={styles.resultImage} />
                        <Text style={styles.resultText}>{recipe.title}</Text>
                    </View>
                })}
                {this.state.searching ? <Text>Searching...</Text> : null}
            </ScrollView>
        </View>
    }

}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        marginTop: 20,
    },
    searchSection: {
        height: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row',
    },
    searchInput: {
        flex: 0.7,
    },
    searchButton: {
        flex: 0.3,
    },
    scrollSection: {
        flex: 0.8,
    },
    resultImage: {
        height: 150,
    },
    resultText: {
        backgroundColor: 'black',
        color: 'white',
        height: 20,
    }
});

function mapStateToProps(state) {
    return {
        searchedRecipes: state.searchedRecipes
    }
}

export default connect(mapStateToProps)(Home);