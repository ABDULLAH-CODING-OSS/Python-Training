from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import TemplateView, View, CreateView, UpdateView, DeleteView
from django.contrib.auth import authenticate, login
from inventory.forms import UserRegisterForm, InventoryItemForm
from .models import InventoryItem, Category
from django.contrib.auth.mixins import LoginRequiredMixin
from inventory_managment.settings import LOW_QUANTITY
from django.contrib import messages
from django.core.paginator import Paginator
from django.utils.translation import ngettext


# Create your views here.
class Index(TemplateView):
    template_name = "inventory/index.html"


class Dashboard(LoginRequiredMixin, View):
    def get(self, request):

        items = InventoryItem.objects.filter(user=self.request.user.id).order_by("id")

        paginator = Paginator(items, 5)
        page_number = request.GET.get("page")
        page_obj = paginator.get_page(page_number)

        low_inventory = InventoryItem.objects.filter(
            user=self.request.user.id, quantity__lte=LOW_QUANTITY
        )

        if low_inventory.count() > 0:
            if low_inventory.count() > 1:
                messages.error(
                    request,
                    ngettext(
                        "%(count)d item has low inventory",
                        "%(count)d items have low inventory",
                        low_inventory.count(),
                    )
                    % {"count": low_inventory.count()},
                )

            else:
                messages.error(
                    request,
                    ngettext(
                        "%(count)d item has low inventory",
                        "%(count)d items have low inventory",
                        low_inventory.count(),
                    )
                    % {"count": low_inventory.count()},
                )
        low_inventory_ids = InventoryItem.objects.filter(
            user=self.request.user.id, quantity__lte=LOW_QUANTITY
        ).values_list("id", flat=True)

        return render(
            request,
            "inventory/dashboard.html",
            {"page_obj": page_obj, "low_inventory_ids": low_inventory_ids},
        )


class SignUpView(View):
    def get(self, request):
        form = UserRegisterForm()
        return render(request, "inventory/signup.html", {"form": form})

    def post(self, request):
        # Handle form submission and user registration logic here
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            user = authenticate(
                username=form.cleaned_data["username"],
                password=form.cleaned_data["password1"],
            )
            login(request, user)

            return redirect(
                "index"
            )  # Redirect to the index page after successful registration
        return render(request, "inventory/signup.html", {"form": form})

        # Redirect to the index page after successful registration


class AddItem(LoginRequiredMixin, CreateView):
    model = InventoryItem
    form_class = InventoryItemForm
    template_name = "inventory/item_form.html"
    success_url = reverse_lazy("dashboard")

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["categories"] = Category.objects.all()
        return context

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


class EditItem(LoginRequiredMixin, UpdateView):
    model = InventoryItem
    form_class = InventoryItemForm
    template_name = "inventory/item_form.html"
    success_url = reverse_lazy("dashboard")


class DeleteItem(LoginRequiredMixin, DeleteView):
    model = InventoryItem
    template_name = "inventory/delete_item.html"
    success_url = reverse_lazy("dashboard")
    context_object_name = "item"
