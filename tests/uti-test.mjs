import test from "ava";
import { StandaloneServiceProvider } from "@kronos-integration/service";
import ServiceUTI from "@kronos-integration/service-uti";

test("service uti definitions should be present", async t => {
  const sp = new StandaloneServiceProvider();

  const us = await sp.declareService({
    type: ServiceUTI
  });

  await us.start();

  t.is(us.controller.conformsTo("org.kronos.flow", "public.json"), true);
});
