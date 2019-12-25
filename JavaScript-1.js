var targetResponse = JSON.parse(context.getVariable("response.content"));
targetResponse.quota = {"allowed" : context.getVariable("ratelimit.impose-quota.allowed.count"),consumed: context.getVariable("ratelimit.impose.available.count")};
context.setVariable("response.content", JSON.stringify(targetResponse));
