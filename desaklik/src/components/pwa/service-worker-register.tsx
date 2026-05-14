"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function ServiceWorkerRegister() {
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
