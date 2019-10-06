import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import BookItem from './bookItem';

class BookList extends Component {
  renderItem({item}) {
    return (
      <BookItem book={item}></BookItem>
    );
  }

  render() {
    const {books} = this.props;
    return (
      <View>
        <FlatList
          data={books}
          renderItem={this.renderItem}
          keyExtractor={item => item.isbn}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(BookList);
