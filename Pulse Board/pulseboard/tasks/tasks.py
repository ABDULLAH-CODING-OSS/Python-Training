import time
from celery import shared_task

@shared_task
def send_task_assignment_notification(task_id, task_title, user_email=None):
    print(f"[CELERY WORKER] Starting notification for Task ID: {task_id}")
    time.sleep(2)
    print(f"[CELERY WORKER] Notification sent for '{task_title}' to {user_email or 'Unassigned'}")
    return f"Notification completed for task {task_id}"



@shared_task
def cleanup_completed_tasks_summary():
    from .models import Task
    completed_count = Task.objects.filter(status='completed').count()

    print(f"[CELERY BEAT] Periodic Check: Found {completed_count} completed tasks in system.")
    return f"Summary complete: {completed_count} tasks checked."
