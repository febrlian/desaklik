"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export function ServiceWorkerRegister() {
  const [isOfflineReady, setIsOfflineReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered:", registration.scope);

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  toast.info("Update tersedia. Refresh halaman untuk memperbarui.");
                } else {
                  setIsOfflineReady(true);
                  toast.success("Aplikasi siap digunakan offline.");
                }
              }
            };
          }
        };
      })
      .catch((error) => {
        console.error("SW registration failed:", error);
      });
  }, []);

  return null;
}
