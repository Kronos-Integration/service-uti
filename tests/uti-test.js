import test from 'ava';
import { Service, ServiceProviderMixin } from 'kronos-service';
import { ServiceUTI, registerWithManager } from '../src/service-uti';

class ServiceProvider extends ServiceProviderMixin(Service) {}

test('service uti definitions should be present', async t => {
  const sp = new ServiceProvider();
  await registerWithManager(sp);

  const us = sp.createServiceFactoryInstanceFromConfig(
    {
      type: 'uti'
    },
    sp
  );

  await us.start();

  t.is(us.controller.conformsTo('org.kronos.flow', 'public.json'), true);
});
