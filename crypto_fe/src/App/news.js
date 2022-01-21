import React from 'react';
import newsCss from './css/newsCss';
import { connect } from "react-redux";
import { compose } from 'redux';
import * as newsActions from "../store/actions/news";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardHeader from '@material-ui/core/CardHeader';

const styles = newsCss;

class News extends React.Component {
    state = {
        price:null,
        news:[],
    }
    componentWillMount() {
        this.props.getPrice();
        this.props.getNews();
      }
    componentWillReceiveProps(props) {
        console.log('props',props)
        if(props.newsReducer.priceData){
            this.setState({
                price:props.newsReducer.priceData.price
            })
        }
        if(props.newsReducer.newsData){
            this.setState({
                news:props.newsReducer.newsData
            })
        }
    }
    render() {
        return(
            <>
            <div >
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        CRYPTO
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Card style={{width:'30%', margin:'50px',padding:'0 20px 20px 20px',textAlign:'left'}}>
                <CardHeader title={'OverView'} style={{ fontWeight: "500 !important", borderBottom:'1px solid lightgray' }}>
                </CardHeader>
                <CardContent>
                    <Typography style={{float:'left'}}>
                        EtherValue:   
                    </Typography>
                    <Typography style={{float:'right'}}>
                        {this.state.price}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{width:'80%', margin:'50px',padding:'0 20px 20px 20px',textAlign:'left',background:'#ece9e9'}}>
                <CardHeader title={'News'} style={{ fontWeight: "500 !important", borderBottom:'1px solid lightgray' }}>
                </CardHeader>
                <CardContent>
                    { this.state.news && this.state.news.map((val) => (
                        <Card style={{marginBottom:'15px'}}>
                            <CardHeader title={val.title} style={{borderBottom:'1px solid lightgray'}}>
                                
                            </CardHeader>
                            <CardContent> 
                                <Typography>
                                    {val.description}
                                </Typography>
                            </CardContent>
                        </Card>  
                    ))}
                    
                </CardContent>
            </Card>
            </>  
        )
    }
  
}

const mapStateToProps = state => {
    
    return {
        newsReducer:state.newsReducer
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getPrice: () => {dispatch(newsActions.getPrice());},
        getNews:() => {dispatch(newsActions.getNews());},
    };
  };
  export default compose(connect(mapStateToProps, mapDispatchToProps))(News)
