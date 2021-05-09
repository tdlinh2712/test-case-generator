import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card, { CardWrapper } from '../../shared/Card';
import TestCases from './TestCases';

import { generateTestCases } from '../../actions';


const TestCasesTab = ({ file, generateTests }) => {

    return (
        <Grid>
            <TestCases />
            <CardWrapper>
                <p>Scripts in Test Cases</p>
                <Card>

                </Card>
            </CardWrapper>
        </Grid>
    )
}

const mapDispatchToProps = {
    generateTests: generateTestCases,
}

const mapStateToProps = ({file}) => ({
    file
})

export default connect(mapStateToProps, mapDispatchToProps)(TestCasesTab);

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    margin-bottom: 40px;
`
