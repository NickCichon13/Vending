import React from "react";
import Card from "react-bootstrap/Card";
 

function CardForAllProducts (){
    return (
<div>
        <Card style={{ width: '18rem' }}>
            <CardImage orientation="top" src={ReactImg} />
            <CardBody>
            <CardText>
            <CardLink href="Candy">Candy</CardLink>
            </CardText>
            </CardBody>
    </Card>


    <Card style={{ width: '18rem' }}>
            <CardImage orientation="top" src={ReactImg} />
            <CardBody>
            <CardText>
            <CardLink href="BaggedChips">Candy</CardLink>
            </CardText>
            </CardBody>
    </Card>


    <Card style={{ width: '18rem' }}>
            <CardImage orientation="top" src={ReactImg} />
            <CardBody>
            <CardText>
            <CardLink href="Coke">Candy</CardLink>
            </CardText>
            </CardBody>
    </Card>   
</div> 
    )
}

export default CardForAllProducts;