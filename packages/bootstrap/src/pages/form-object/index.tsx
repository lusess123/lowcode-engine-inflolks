import React from 'react';
import { ObjectForm, SteedosProvider } from '@steedos-ui/builder-object';
import { Builder, withChildren } from '@steedos-builder/react';
import TestObject from './test.object';

export default () => {
  var initialValues = {
    boolean__c: true,
    datetime__c: new Date(),
    autonumber__c: '2001-00001',
    percent__c: 0.55,
    name: 'xxx',
    grid: [
      {
        col1: '111',
        col2: true,
      },
      {
        col1: '222',
        col2: true,
      },
    ],
    contracts2: ['1', '2'],
    contractsNo: ['2021-009'],
    populationType: ['1', '2'],
    // contracts_reference_to_func: {o:'contract_types',ids:['fcxTeWMEvgdMQnvwZ'],labels:["合同分类1"]},
    // contracts_reference_to_func: 'ebqwa4viwcwMZa7MY',
    object: {
      sub1: 'sub1',
      sub2: true,
    },
  };

  if (localStorage.getItem('story-form-SchemaForm')) {
    initialValues = JSON.parse(localStorage.getItem('story-form-SchemaForm'))
  }

  const objectFormProps = {
    objectSchema: TestObject,
    // initialValues,
    onFinish: async (values) => {
      console.log('SchemaForm values:', values);
      localStorage.setItem('story-form-SchemaForm', JSON.stringify(values));
    },
  };

  return (
    <SteedosProvider
    >
      <ObjectForm
        mode="read"
        layout="horizontal"
        {...objectFormProps}
      ></ObjectForm>
    </SteedosProvider>
  );
};
