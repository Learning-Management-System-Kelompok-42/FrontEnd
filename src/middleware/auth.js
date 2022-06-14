export default function ({ redirect, app }) {
  if (!app.$cookie.get("token")) {
    redirect("/");
  }
}
