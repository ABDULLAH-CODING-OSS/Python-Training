import django_filters
from .models import Employee


class EmployeeFilter(django_filters.FilterSet):
    designation = django_filters.CharFilter(field_name="emp_dept", lookup_expr="iexact")
    name = django_filters.CharFilter(field_name="emp_name", lookup_expr="icontains")
    id = django_filters.RangeFilter(field_name="emp_id")

    class Meta:
        model = Employee
        fields = ["designation", "name", "id"]
