import time
from celery import shared_task

@shared_task
def send_task_assignment_notification(task_id, task_title, user_email=None):
    print(f"[CELERY WORKER] Starting notification for Task ID: {task_id}")
    time.sleep(2)
    print(f"[CELERY WORKER] Notification sent for '{task_title}' to {user_email or 'Unassigned'}")
    return f"Notification completed for task {task_id}"



