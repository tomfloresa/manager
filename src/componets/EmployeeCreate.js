import React, { Component } from 'react';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';

class EmployeeCreate extends Component {
    render() {
        return(
            <Card>
                <CardSection>
                  <Input label="Name" />
                </CardSection>
                <CardSection>
                  <Input label="Phone" />
                </CardSection>
                <CardSection>
                  
                </CardSection>
                <CardSection>
                  <Button>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;