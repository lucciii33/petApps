"""empty message

Revision ID: a23bd08417b2
Revises: c761e4ed7f52
Create Date: 2022-05-30 14:08:43.266346

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a23bd08417b2'
down_revision = 'c761e4ed7f52'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('full_name', sa.String(length=120), nullable=True))
    op.add_column('user', sa.Column('phone', sa.String(length=120), nullable=True))
    op.add_column('user', sa.Column('rating', sa.String(length=120), nullable=True))
    op.add_column('user', sa.Column('user_type', sa.String(length=120), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'user_type')
    op.drop_column('user', 'rating')
    op.drop_column('user', 'phone')
    op.drop_column('user', 'full_name')
    # ### end Alembic commands ###