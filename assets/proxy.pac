function FindProxyForURL(url, host) {
  return "SOCKS5 127.0.0.1:9999; PROXY 127.0.0.1:9999; DIRECT;"
}
