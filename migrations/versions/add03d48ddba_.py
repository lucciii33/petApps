"""empty message

Revision ID: add03d48ddba
Revises: 6f5acb879a6d
Create Date: 2022-07-20 20:12:04.877883

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'add03d48ddba'
down_revision = '6f5acb879a6d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user_doctors', sa.Column('image_profile', sa.String(length=520), nullable=False))
    op.create_unique_constraint(None, 'user_doctors', ['image_profile'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user_doctors', type_='unique')
    op.drop_column('user_doctors', 'image_profile')
    # ### end Alembic commands ###
