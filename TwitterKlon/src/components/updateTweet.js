import React, { Component } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import {connect} from 'react-redux'
import {changeTweet,updateTweet} from '../actions'
import {TextArea, MyButton} from './common'

class UpdateTweet extends Component {
    componentDidMount(){
        const {tweet} = this.props.tweet;
        this.props.changeTweet(tweet);
    }
    onChangeTweet(tweet) {
        this.props.changeTweet(tweet);
    }
    updateTweet(){
        const tweetObj={...this.props.tweet, 
                        tweet: this.props.tweetForm.tweet}
        this.props.updateTweet(tweetObj);
    }
    render() {
        const {tweetForm}=this.props;
        return (
            <View style={styles.updateContainer}>
                 <TextArea placeholder='Type here...'
                 value={tweetForm.tweet}
                onChangeText={this.onChangeTweet.bind(this)}></TextArea>
                <MyButton spinner={false} 
                title='Update'
                onPress= {this.updateTweet.bind(this)}
                color='#e87b79'></MyButton>
                <MyButton spinner={false}
                          title='Delete'
                          onPress={()=>console.log('delete')}
                          color='#eff0ee'
                          backgroundColor='#e87b79'
                          >

                </MyButton>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    updateContainer:{
        flex:1,
        backgroundColor:'white',
        padding:15
    }
})

const mapStateToProps=state=>{
    return {
        tweetForm: state.tweetForm
    }
}
export default connect(mapStateToProps,{
    changeTweet,updateTweet
}) (UpdateTweet)
