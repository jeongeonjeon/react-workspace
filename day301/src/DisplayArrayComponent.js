import React, { Component } from 'react';
 
class DisplayArrayComponent extends Component {
   
   state = {
       flowers : ['장미', '국화', '코스모스', '개나리'],
       name : ''
   }

   removeFlower = (index) => {
       console.log('click...', index)

       const flowerList = this.state.flowers.filter((flower, i) => {
           if(i !== index)
               return flower;
       });
       console.log(flowerList)

       this.setState({
           flowers : [
                       ...this.state.flowers.slice(0, index),
                       ...this.state.flowers.slice(index+1)
                     ]
       });
   }

   removeFlower02 = (index) => {
       console.log('click...', index)
       this.setState({
           flowers : [
                       ...this.state.flowers.slice(0, index),
                       ...this.state.flowers.slice(index+1)
                     ]
       });
   }

   removeFlower01 = (index) => {
       console.log('click...', index)
       var array = [];
       for(var i in this.state.flowers) {
           if(i != index)
               array.push(this.state.flowers[i]);
       }
       this.setState({
           flowers : array
       });
   }

   handlerChange = (e) => {
       this.setState({
           [e.target.name] : e.target.value
       });
   }

   clickBtn = () => {
       this.setState({
        //    flowers : [...this.state.flowers, this.state.name],
           flowers : this.state.flowers.concat(this.state.name),
           name : ''
       });
   }

    render() {
        const seasons = ['봄', '여름', '가을', '겨울'];
        const newSeasons = seasons.map(function(season, index) {
            return <li key={index}>{season}</li>;
        });

        const seasonList = seasons.map(
            (season, index) => <li key={index}>{season}</li> 
        );

        const {flowers} = this.state;
        const flowerList = flowers.map(
            (flower, index) => 
               <li key={index}
                   onDoubleClick={() => {
                       this.removeFlower(index)
                   }}>{flower}</li>
        )

        return (
            <div>
                꽃이름 입력 : 
                <input type="text" name="name" 
                       value={this.state.name}
                       onChange={this.handlerChange}/>
                <button onClick={this.clickBtn}>추가</button>
                <ul>
                    {flowerList}
                </ul>
                <ul>
                    {newSeasons}
                </ul>
                <ol>
                    {seasonList}
                </ol>
            </div>
        );
    }
}

export default DisplayArrayComponent;