import React, { useState } from 'react';
import Card, { CardWrapper } from '../../shared/Card';

const TestCases = () => {
    const [testCases, setTestCases] = useState([]);

    return (
        <CardWrapper>
            <p>Test Cases</p>
            <Card>
            </Card>
        </CardWrapper>
    );
}

export default TestCases;
