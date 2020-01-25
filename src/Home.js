import React, {component} from 'react';
import  Pizza from './pizza.jpg';
import  momo from './momo.jpg';
import  burger from './burger.jpg';
import  sandwich from './sandwich.jpg';
import  fries from './fries.jpg';
export default class Home extends component {
    render(){
        return(
            <div>

                {this.props.meals.map((item, index) => {
                    return (
                        <a
                            key={index}
                            href={item.strSource}>

                        </a>
                    )
                })}
                {/*<div className="home">*/}
                {/*    <h1 className="title"> Introduction:</h1>*/}
                {/*    <p className="abc">This food-delivery app is for all the foodie out there.It greatly simplifies the*/}
                {/*        ordering process for the customer.*/}
                {/*        It is the fastest,easiest and the most convenient way to enjoy the best food at your home ,at*/}
                {/*        the office or wherever you want to.*/}
                {/*        This food-delivery app has easy and simple features.*/}
                {/*        The food-delivery is timely, convenient and comprehensive.</p>*/}
                {/*</div>*/}
                <div className="image">
                    <img src={Pizza} alt="PIZZA" width="200" height="200"/>
                    <img src={momo} alt="MO:MO" width="200" height="200"/>
                    <img src={burger} alt="Burger" width="300" height="200"/>
                    <img src={sandwich} alt="sandwich" width="300" height="200"/>
                    <img src={fries} alt="fries" width="220" height="200"/>


                </div>
            </div>
        )
    }
}

