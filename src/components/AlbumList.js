import React, {Component} from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component{
    constructor(props){
        super(props)
        this.state = {
            albums: []
        }
    }

    componentWillMount(){
        console.log('component will mount, AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => {
            this.setState({albums: response.data})
        })
    }

    renderAlbums(){
        return(
            this.state.albums.map((album, index) => 
                <AlbumDetail 
                    key={index}
                    album={album}
                />
            )
        )
        
    }
    
    render(){    
        console.log(this.state);
        
        return (
            <ScrollView>
                {this.renderAlbums()}

            </ScrollView>
        )
    }
}

export default AlbumList;