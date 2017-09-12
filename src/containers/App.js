import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin'
import SwipeableViews from 'react-swipeable-views'
import DatePicker from 'material-ui/DatePicker'
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  headline: {
  },
  slide: {
  },
};

class CurTabs extends Component{
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }
  handleChange(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
  }
  render(){
    return (
      <div>
        <div className="tabs">

        </div>
        <Tabs className="fasfd" onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
          <Tab icon={<FontIcon className="material-icons">phone</FontIcon>} 
             label="RECENTS" value={0} />
          <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>}
             label="FAVORITES" value={1} />
          <Tab icon={<MapsPersonPin />} 
               label="NEARBY" value={2} />
        </Tabs>
      </div>
    )
  }
}

class AppMainTab extends Component{
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }
  handleChange(value){
    this.setState({
      slideIndex: value,
    });
  }
  render(){
  	return (
		<div>
			<SwipeableViews className="aaaaa" index={this.state.slideIndex}
	          onChangeIndex={this.handleChange.bind(this)} >
	          <div>
	            页面一
	            <DatePicker hintText="Portrait Dialog" />
	            <AutoCompleteExampleSimple />
	          </div>
	          <div>
	          <DatePicker hintText="Landscape Dialog" mode="landscape" />
	            页面二
	          </div>
	          <div>
	            页面三分店
	          </div>
	        </SwipeableViews>
	        <Tabs className="fasfd" onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
			    <Tab icon={<FontIcon className="material-icons">phone</FontIcon>} 
			    	 label="RECENTS" value={0} />
			    <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>}
			    	 label="FAVORITES" value={1} />
			    <Tab icon={<MapsPersonPin />} 
			         label="NEARBY" value={2} />
		    </Tabs>
		</div>
	)
  }
}

// const AppMainTab = () => ;

export default CurTabs;


class AutoCompleteExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  handleUpdateInput(value){
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput.bind(this)}
        />
      </div>
    );
  }
}