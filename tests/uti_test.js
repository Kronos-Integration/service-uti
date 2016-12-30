/* global describe, it, xit, before, beforeEach, after, afterEach */
/* jslint node: true, esnext: true */

'use strict';

const chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  {
    Service, ServiceProviderMixin
  } = require('kronos-service'),
  uti = require('uti'),
  {
    ServiceUTI, registerWithManager
  } = require('../dist/module.js');

class ServiceProvider extends ServiceProviderMixin(Service) {}

const sp = new ServiceProvider();

describe('service', () => {
  describe('uti definitions', () => {
    it('should be present', () => {
      return registerWithManager(sp).then(() => {
        const us = sp.createServiceFactoryInstanceFromConfig({
          type: 'uti'
        }, sp);

        return us.start().then(() => {
          //console.log(`** ${manager.uti.conformsTo('org.kronos.flow','public.json')}`);
          assert(uti.conformsTo('org.kronos.flow', 'public.json'),
            'org.kronos.flow conformsTo public.json');
        });
      });
    });
  });
});
