import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Spinner from './common/Spinner';

import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return(
                <View>
                  <Text>{ this.props.error }</Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            <Spinner size={ 'large' } />
        }

        return(
         <Button onPress={ this.onButtonPress.bind(this) }>
            Login
         </Button>
        );
    }

    render() {
        return(
            <Card>
              <CardSection>
                <Input label={ 'Email' } 
                       placeholder={ 'email@gmail.com' } 
                       onChangeText={ this.onEmailChange.bind(this) } 
                       autoCorrect={ false }
                       value={ this.props.email } />
              </CardSection>
              <CardSection>
                <Input label={ 'Password' } 
                       placeholder={ 'password' } 
                       onChangeText={ this.onPasswordChange.bind(this) } 
                       autoCorrect={ false }
                       isSecure={ true } />
              </CardSection>
                { this.renderError() }
              <CardSection>
                { this.renderButton() }
              </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);