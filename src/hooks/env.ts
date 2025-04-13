export function useEnv() {
  console.log(import.meta.env)
  let { VITE_APP_NAME, VITE_APP_TITLE, VITE_APP_DESC, VITE_API_BASE_URL } =
    import.meta.env
  return { VITE_APP_TITLE, VITE_APP_DESC, VITE_APP_NAME, VITE_API_BASE_URL }
}
useEnv()
