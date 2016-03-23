/* global describe, it, xit, before, beforeEach, after, afterEach */
/* jslint node: true, esnext: true */

"use strict";

const chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  service = require('kronos-service'),
  uti = require('uti'),
  ServiceUTI = require('../service.js');

class ServiceProvider extends service.ServiceProviderMixin(service.Service) {}

const sp = new ServiceProvider();

describe('service', () => {
  describe('uti definitions', () => {
    it('should be present', done => {
      return ServiceUTI.registerWithManager(sp).then(() => {
        const us = sp.createServiceFactoryInstanceFromConfig({
          type: 'uti'
        }, sp);

        return us.start().then(() => {
          try {
            //console.log(`** ${manager.uti.conformsTo('org.kronos.flow','public.json')}`);
            assert(uti.conformsTo('org.kronos.flow', 'public.json'),
              'org.kronos.flow conformsTo public.json');
            done();
          } catch (e) {
            done(e);
          }
        });
      });
    });
  });
});
