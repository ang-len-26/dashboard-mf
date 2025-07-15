export async function loadRemote<T = any>(
  remoteUrl: string,
  scope: string,
  module: string
): Promise<T> {
  // Inicializa el sistema de compartición de módulos de Webpack
  await __webpack_init_sharing__('default');

  const container = await loadRemoteContainer(remoteUrl, scope);
  // Inicializa el contenedor con el sistema de compartición
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  return factory();
}

function loadRemoteContainer(remoteUrl: string, scope: string): Promise<any> {
  return new Promise((resolve, reject) => {
    if ((window as any)[scope]) {
      return resolve((window as any)[scope]);
    }
    const script = document.createElement('script');
    script.src = remoteUrl;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      resolve((window as any)[scope]);
    };
    script.onerror = () => {
      reject(new Error(`Error al cargar el remote: ${remoteUrl}`));
    };
    document.head.appendChild(script);
  });
}

declare const __webpack_init_sharing__: (scope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: unknown; };
