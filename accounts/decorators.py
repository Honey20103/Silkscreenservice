from django.shortcuts import redirect


def allowed_users(allowed_roles=[]):
    """
    Looks for the user group & checks
    if an user has admin rights to view the admin dashboard.
    If not, the user will be redirected.
    """
    def decorator(view_func):
        def wrapper_func(request, *args, **kwargs):

            group = None
            if request.user.groups.exists():
                group = request.user.groups.all()[0].name

            if group in allowed_roles:
                return view_func(request, *args, **kwargs)
            else:
                return redirect('accounts:adminpage')
        return wrapper_func
    return decorator
