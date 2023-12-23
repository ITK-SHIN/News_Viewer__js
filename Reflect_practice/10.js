let object = {
  data: "Valuable data",
};

let { proxy, revoke } = Proxy.revocable(object, {});

// pass the proxy somewhere instead of object...
console.log(proxy.data); // Valuable data

// later in our code
revoke();

// the proxy isn't working any more (revoked)
console.log(proxy.data); // Error
