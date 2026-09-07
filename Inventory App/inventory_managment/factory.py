import argparse
import os
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'inventory_managment.settings')

import django

django.setup()

from django.contrib.auth.models import User
from django.db import transaction
from faker import Faker

from inventory.models import Category, InventoryItem


fake = Faker()


@transaction.atomic
def generate_data(user_count=5, category_count=8, item_count=30):
	"""Create fake users, categories, and inventory items."""
	users = []
	for _ in range(user_count):
		username = fake.unique.user_name()
		user = User.objects.create_user(
			username=username,
			email=fake.unique.email(),
			password='TestPassword123!',
			first_name=fake.first_name(),
			last_name=fake.last_name(),
		)
		users.append(user)

	categories = []
	for _ in range(category_count):
		category = Category.objects.create(name=fake.unique.word().title())
		categories.append(category)

	for _ in range(item_count):
		InventoryItem.objects.create(
			name=fake.unique.catch_phrase(),
			quantity=random.randint(1, 100),
			category=random.choice(categories) if categories else None,
			user=random.choice(users),
		)

	return users, categories


def main():
	parser = argparse.ArgumentParser(description='Generate fake inventory data.')
	parser.add_argument('--users', type=int, default=5, help='Number of users to create.')
	parser.add_argument('--categories', type=int, default=8, help='Number of categories to create.')
	parser.add_argument('--items', type=int, default=30, help='Number of inventory items to create.')
	args = parser.parse_args()

	if min(args.users, args.categories, args.items) < 0:
		parser.error('Counts cannot be negative.')

	users, categories = generate_data(args.users, args.categories, args.items)
	print(
		f'Created {len(users)} users, {len(categories)} categories, '
		f'and {args.items} inventory items.'
	)


if __name__ == '__main__':
	main()
