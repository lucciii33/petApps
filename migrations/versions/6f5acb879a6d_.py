"""empty message

Revision ID: 6f5acb879a6d
Revises: c694ced3e460
Create Date: 2022-07-12 13:54:39.489745

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6f5acb879a6d'
down_revision = 'c694ced3e460'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'user_doctors', ['email'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user_doctors', type_='unique')
    # ### end Alembic commands ###
