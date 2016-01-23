/* global describe, it, xit */
/* jslint node: true, esnext: true */

"use strict";

const chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  service = require('kronos-service'),
  uti = require('uti'),
  ServiceUTI = require('../service.js');


class _ServiceProvider {}
class ServiceProvider extends service.ServiceProviderMixin(_ServiceProvider) {}

const sp = new ServiceProvider();


describe('service', () => {
  ServiceUTI.registerWithManager(sp);

  const us = sp.createServiceInstance('uti', {});
  us.start();


  describe('uti definitions', () => {
    it('should be present', done => {
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
